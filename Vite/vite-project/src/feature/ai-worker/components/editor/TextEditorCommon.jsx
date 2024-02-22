import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import FormProvider, { RHFEditor } from '../../../../components/hook-form';
import { Button, CardContent, Typography, CardActions } from '@mui/material';
import { Text16SantaGreyWeight400 } from 'src/components/common/TypographyStyled';
import { fData } from 'src/utils/formatNumber';

export const createHtmlContent = (data) => {
	if (!data) return;

	// handle new lines, bolding, and italics
	const htmlContent = data
		.replace(/\n/g, '<br />')
		.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
		.replace(/\*(.*?)\*/g, '<em>$1</em>');

	return htmlContent;
};

const hasNoText = (html) => {
	// Create a temporary element
	var temp = document.createElement("div");
	// Set the HTML content of the temporary element
	temp.innerHTML = html;
	// Get all text nodes within the temporary element
	var textNodes = temp.querySelectorAll("*");
	// Iterate through each text node
	for (var i = 0; i < textNodes.length; i++) {
			// Check if the text content is not empty or contains only whitespace characters
			if (textNodes[i].textContent.trim().length > 0) {
					// If any text content is found, return false
					return false;
			}
	}
	// If no text content is found, return true
	return true;
}

/**
 * Renders a common text editor component.
 *
 * @param {Object} props - The component properties.
 * @param {string} props.htmlContent - The HTML content of the editor.
 * @param {Function} props.onSave - The function to be called when the editor content is saved.
 * @return {JSX.Element} The rendered common text editor component.
 */
const TextEditorCommon = ({
  htmlContent,
  onSave,
  defaultIsEditMode = false,
  setDefaultIsEditMode,
  isLoading,
  saveOnMouseLeave,
  placeholder,
  quitImmediately = true,
  isRequired = true,
  sizeLimit = 0,
}) => {
	const [submitDisabled, setSubmitDisabled] = useState(false);

	const handleEditClick = () => {
		setValue('htmlContent', createHtmlContent(htmlContent));
		setDefaultIsEditMode && setDefaultIsEditMode(prevState => !prevState)
	};

	const handleCancel = () => {
		setValue('htmlContent', createHtmlContent(htmlContent));
		setTimeout(() => setDefaultIsEditMode(prevState => !prevState), 100);
	};

	const defaultValues = {
		htmlContent: createHtmlContent(htmlContent),
	};
	let htmlValidation = Yup.string();
	if (isRequired && sizeLimit) {
		htmlValidation = Yup.string().required('Text content is required.').max(sizeLimit, `Text must be less than ${fData(sizeLimit)}kb in size`);
	} else if (isRequired) {
		htmlValidation = Yup.string().required('Text content is required.');
	} else if (sizeLimit) {
		htmlValidation = Yup.string().max(sizeLimit, `Text must be less than ${fData(sizeLimit)}kb in size`);
	}
	const composeTextSchema = Yup.object().shape({
		htmlContent: htmlValidation,
	});

	const methods = useForm({
		resolver: yupResolver(composeTextSchema),
		defaultValues,
		values: {
			htmlContent: createHtmlContent(htmlContent),
		},
	});

	const {
		clearErrors,
		setError,
		handleSubmit,
		getValues,
		setValue,
		watch,
	} = methods;

	const currentHtmlContent = watch('htmlContent');

	// Side effect to validate the field (not sure why yup not working with size limit)
	useEffect(() => {
		const errorMessage = currentHtmlContent?.length > sizeLimit
		? `Text must be less than ${fData(sizeLimit)} in size`
		: isRequired && currentHtmlContent?.length === 0
		? 'Text content is required.'
		: '';
		if (errorMessage) {
			setError('htmlContent', {
				message: errorMessage
			});
		} else {
			clearErrors('htmlContent')
		}
		setSubmitDisabled(!!errorMessage);
	}, [currentHtmlContent]);

	const onSubmit = async (data) => {
		await onSave(hasNoText(data.htmlContent) ? '' : data.htmlContent);
		setDefaultIsEditMode && quitImmediately && setDefaultIsEditMode(false);
	};

	const onMouseLeaveEvent = () => {
		const currentHtmlContent = getValues().htmlContent;
		onSave(hasNoText(currentHtmlContent) ? '' : currentHtmlContent);
	}

	return (
		<>
			{defaultIsEditMode ? (
				<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
					<CardContent sx={{ padding: 0, width: 'inherit' }}>
						<div onMouseLeave={() => saveOnMouseLeave ? onMouseLeaveEvent() : null}>
							<RHFEditor simple name='htmlContent' readOnly={!defaultIsEditMode} placeholder={placeholder} sx ={{ minWidth: '510px' }}/>
						</div>
					</CardContent>
					{ !saveOnMouseLeave && (
						<CardActions sx={{ justifyContent: 'flex-end' }}>
							<Button variant={'outlined'} disabled={isLoading} onClick={handleCancel}>
								Cancel
							</Button>
							<LoadingButton sx={{backgroundColor: '#21044c', color: 'white'}} type='submit' variant='contained' loading={isLoading} disabled={submitDisabled}>
								Save
							</LoadingButton>
						</CardActions>
					)}
				</FormProvider>
			) : (
				currentHtmlContent ? (
					<Typography onClick={() => handleEditClick()} variant='body1' component={'div'} sx={{ cursor: 'pointer', width: '100%', '& > *': { marginBlock: 0 } }} dangerouslySetInnerHTML={{ __html: currentHtmlContent }}></Typography>
				) : (
					<Text16SantaGreyWeight400 sx={{ width: '100%' }} onClick={() => handleEditClick()}>{placeholder || "You can add notes here"}</Text16SantaGreyWeight400>
				)
			)}
		</>
	);
};

TextEditorCommon.propTypes = {
	htmlContent: PropTypes.string,
};

export default TextEditorCommon;
