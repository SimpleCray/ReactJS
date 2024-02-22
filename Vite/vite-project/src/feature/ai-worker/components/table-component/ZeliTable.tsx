import * as React from 'react';
import { Typography, Stack, IconButton } from '@mui/material';
import { DataGrid, GridColDef, GridCallbackDetails, GridSelectionModel } from '@mui/x-data-grid';
import { useState } from 'react';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Popper from '@mui/material/Popper';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

type ZeliTableProps = {
	checkboxSelection?: boolean;
	rows: Array<any>;
	columns: GridColDef[];
	onSelectionModelChange?: ((selectionModel: GridSelectionModel, details: GridCallbackDetails<any>) => void) | undefined;
	handleMouseEnter?: any,
	handleMouseLeave?: any
};

const ZeliTable = (props: ZeliTableProps) => {
	const { checkboxSelection = true, rows, columns, onSelectionModelChange } = props;

	const popperRef = useRef<null | HTMLDivElement>(null);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLDivElement>(null);
	const [value, setValue] = React.useState<any>({});

	const open = Boolean(anchorEl);

	const handlePopperOpen = (event: any) => {
		const id = event.currentTarget.dataset.id;
		const row: any = rows.find((r) => String(r.id) === id);
		setValue(row);
		setAnchorEl(event.currentTarget);
	};

	const handlePopperClose = (event: any) => {
		if (anchorEl == null || popperRef.current.contains(event.nativeEvent.relatedTarget)) {
			return;
		}

		setAnchorEl(null);
	};

	const checkedIcon = <AutoAwesomeIcon fontSize='inherit' color='primary' />;

	const unCheckedIcon = <AutoAwesomeOutlinedIcon color='primary' />;

	const dataGridStyles = {
		'& .MuiDataGrid-columnHeaders': {
			background: '#21054C',
			color: 'white',
			borderRadius: '8px 8px 0px 0px',
			height: '36px !important',
		},
		'& .MuiIconButton-root': {
			color: 'white',
		},
		'& .MuiDataGrid-columnHeaderTitle': {
			fontWeight: '600',
		},
	};

	// const handleMouseOver = (event: any) => {
	// 	console.log('Mouse enter', event)
	// }

	// const handleMouseLeave = (event: any) => {
	// 	console.log('Mouse leave', event)
	// }

	return (
		<>
			<div>
				<div style={{ height: 400, width: '100%' }}>
					<DataGrid
						sx={dataGridStyles}
						rows={rows}
						columns={columns}
						autoPageSize={false}
						disableSelectionOnClick
						checkboxSelection={checkboxSelection}
						hideFooterPagination={true}
						headerHeight={36}
						onSelectionModelChange={onSelectionModelChange}
						componentsProps={{
							row: {
								onMouseEnter: handlePopperOpen,
								onMouseLeave: handlePopperClose,
							},
						}}
						// components={{
						// 	BaseCheckbox: (props) => <Checkbox {...props} checkedIcon={checkedIcon} icon={unCheckedIcon} />,
						// }}
					/>
				</div>
				<Popper ref={popperRef} open={open} anchorEl={anchorEl} placement={'top-end'} sx={{ width: '424px', zIndex: '9999' }} transition onMouseLeave={() => setAnchorEl(null)}>
					{({ TransitionProps }) => (
						<Fade {...TransitionProps} timeout={350}>
							<Paper sx={{ transform: 'translateX(-140px)', padding: 2, boxShadow: `0px 4px 4px 0px rgba(0, 0, 0, 0.25)` }}>
								<Stack direction={'column'} gap={1}>
									<Stack direction={'row'} spacing={2}>
										<Avatar src='/broken-image.jpg' sx={{ width: 96, height: 96 }}>
											S
										</Avatar>

										<Stack direction={'column'} spacing={1}>
											<Typography variant='h5'>
												{value?.first_name} {value?.last_name}
											</Typography>
											<div>{value.occupation}</div>
											<div>{value.city}</div>
										</Stack>
									</Stack>

									<Stack>Two years experience managing the day-to-day operations for the restaurant and bar, leading a team of 28 people. Increased revenue by 85%.</Stack>

									<Stack>
										{value.email && (
											<div>
												<IconButton
													color='primary'
													onClick={(e) => {
														window.location.href = 'mailto:' + value.email;
														e.preventDefault();
													}}
												>
													<MailOutlineRoundedIcon fontSize='inherit' />{' '}
												</IconButton>
												{value.email}
											</div>
										)}
										{value.mobile_number && (
											<div>
												<IconButton
													color='primary'
													onClick={(e) => {
														window.location.href = 'tel:' + value.mobile_number;
														e.preventDefault();
													}}
												>
													<PhoneOutlinedIcon fontSize='inherit' />{' '}
												</IconButton>
												{value.mobile_number}
											</div>
										)}
									</Stack>

									<Stack alignSelf={'end'}>
										<Button variant='contained' color='primary' onClick={() => console.log('edit: ', value)}>Score again</Button>
									</Stack>
								</Stack>
							</Paper>
						</Fade>
					)}
				</Popper>
			</div>
		</>
	);
};

export default ZeliTable;
function useRef<T>(arg0: null) {
	throw new Error('Function not implemented.');
}

