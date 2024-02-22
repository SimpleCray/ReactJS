import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import '../../utils/highlight';
//
import { StyledEditor } from './styles';
import EditorToolbar, { formats } from './EditorToolbar';
import ReactQuill from 'react-quill';
import ErrorBoundary from '../error-boundary';

// ----------------------------------------------------------------------
// All rights reserved - SEDZ PTY LTD - 2023
// ----------------------------------------------------------------------

Editor.propTypes = {
	id: PropTypes.string.isRequired,
	sx: PropTypes.object,
	error: PropTypes.bool,
	simple: PropTypes.bool,
	value: PropTypes.string,
	onChange: PropTypes.func,
	helperText: PropTypes.object,
};

export default function Editor({ id , error, value, onChange, simple = false, helperText, sx, readOnly, placeholder, ...other }) {
	const modules = {
		toolbar: readOnly ? false : {
			container: `#${id}`,
		},
		history: {
			delay: 500,
			maxStack: 100,
			userOnly: true,
		},
		syntax: true,
		clipboard: {
			matchVisual: false,
		},
	};

	return (
		<>
			<StyledEditor
				sx={{
					...(error && {
						border: (theme) => `solid 1px ${theme.palette.error.main}`,
					}),
					...sx,
					width: '100%'
				}}
			>
				{!readOnly && <EditorToolbar id={id} isSimple={true} />}

				<ErrorBoundary fallback={<Box>Something went wrong</Box>}>
					<ReactQuill value={value} onChange={onChange} modules={modules} formats={formats} placeholder={placeholder || 'Write something awesome...'} {...other} readOnly={readOnly}/>
				</ErrorBoundary>
			</StyledEditor>

			{helperText && helperText}
		</>
	);
}
