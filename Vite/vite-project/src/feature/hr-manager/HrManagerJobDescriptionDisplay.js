import { paramCase } from 'change-case';
import { useEffect, useState } from 'react';
// next
import { useRouter } from '../../hooks/useRouter';
// @mui
import { Stack, Tab, Tabs, Card, Table, Button, Tooltip, Divider, TableBody, Container, IconButton, TableContainer } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// _mock_
// components
import { Iconify } from '@zelibot/zeligate-ui';
import Scrollbar from '../../components/scrollbar';
import ConfirmDialog from '../../components/confirm-dialog';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
import { useSettingsContext } from '@zelibot/zeligate-ui';
import { useTable, getComparator, emptyRows, TableNoData, TableEmptyRows, TableHeadCustom, TableSelectedAction, TablePaginationCustom } from '../../components/table';
// sections
import { JobDescriptionTableRow } from '../dashboard/components/user/list';
import { AIGetAPIRequest } from '../ai-worker/constants';
import { useSnackbar } from 'notistack';
import UserFeedback from '../../components/user-feedback/UserFeedback';

// ----------------------------------------------------------------------

const STATUS_OPTIONS = ['all', 'Short List', 'Rejected'];

const ROLE_OPTIONS = ['all', 'ux designer', 'full stack designer', 'backend developer', 'project manager', 'leader', 'ui designer', 'ui/ux designer', 'front end developer', 'full stack developer'];

const TABLE_HEAD = [
	{ id: 'jobTitle', label: 'Job Title', align: 'left' },
	{ id: 'url', label: 'Document Link', align: 'left' },
	{
		/*{ id: 'company', label: 'Company', align: 'left' },
    { id: 'role', label: 'Role', align: 'left' },
    { id: 'isVerified', label: 'Booked', align: 'center' },
    { id: 'status', label: 'Status', align: 'left' },
    { id: '' },*/
	},
];

// ----------------------------------------------------------------------

export default function HrManagerJobDescriptionDisplay({ target_url, onViewJobDescription, type, event_id }) {
	const { enqueueSnackbar } = useSnackbar();
	const {
		dense,
		page,
		order,
		orderBy,
		rowsPerPage,
		setPage,
		//
		selected,
		setSelected,
		onSelectRow,
		onSelectAllRows,
		//
		onSort,
		onChangeDense,
		onChangePage,
		onChangeRowsPerPage,
	} = useTable();

	const { themeStretch } = useSettingsContext();

	const { push } = useRouter();

	const [tableData, setTableData] = useState([]);

	// handle get data from api
	useEffect(() => {
		if (target_url) {
			const handleGetData = async () => {
				await AIGetAPIRequest(target_url)
					.then((response) => {
						if (response !== null) {
							setTableData(response);
						}
					})
					.catch((error) => {
						console.error('error: ', error);
					});
			};
			void handleGetData();
		}
	}, [target_url]);

	const [openConfirm, setOpenConfirm] = useState(false);

	const [filterName, setFilterName] = useState('');

	const [filterRole, setFilterRole] = useState('all');

	const [filterStatus, setFilterStatus] = useState('all');

	const dataFiltered = applyFilter({
		inputData: tableData,
		comparator: getComparator(order, orderBy),
		filterName,
		filterRole,
		filterStatus,
	});

	const dataInPage = dataFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

	const denseHeight = dense ? 52 : 72;

	const isFiltered = filterName !== '' || filterRole !== 'all' || filterStatus !== 'all';

	const isNotFound = (!dataFiltered.length && !!filterName) || (!dataFiltered.length && !!filterRole) || (!dataFiltered.length && !!filterStatus);

	const handleOpenConfirm = () => {
		setOpenConfirm(true);
	};

	const handleCloseConfirm = () => {
		setOpenConfirm(false);
	};

	const handleFilterStatus = (event, newValue) => {
		setPage(0);
		setFilterStatus(newValue);
	};

	const handleFilterName = (event) => {
		setPage(0);
		setFilterName(event.target.value);
	};

	const handleFilterRole = (event) => {
		setPage(0);
		setFilterRole(event.target.value);
	};

	const handleDeleteRow = (id) => {
		const deleteRow = tableData.filter((row) => row.id !== id);
		setSelected([]);
		setTableData(deleteRow);

		if (page > 0) {
			if (dataInPage.length < 2) {
				setPage(page - 1);
			}
		}
	};

	const handleDeleteRows = (selectedRows) => {
		const deleteRows = tableData.filter((row) => !selectedRows.includes(row.id));
		setSelected([]);
		setTableData(deleteRows);

		if (page > 0) {
			if (selectedRows.length === dataInPage.length) {
				setPage(page - 1);
			} else if (selectedRows.length === dataFiltered.length) {
				setPage(0);
			} else if (selectedRows.length > dataInPage.length) {
				const newPage = Math.ceil((tableData.length - selectedRows.length) / rowsPerPage) - 1;
				setPage(newPage);
			}
		}
	};

	const handleEditRow = (id) => {
		push(PATH_DASHBOARD.user.edit(paramCase(id)));
	};

	const handleResetFilter = () => {
		setFilterName('');
		setFilterRole('all');
		setFilterStatus('all');
	};

	return (
		<>
			{/*<Container maxWidth={themeStretch ? false : 'lg'}>
                {/*<CustomBreadcrumbs
                    heading="Candidate List"
                    links={[
                        { name: 'Dashboard', href: PATH_DASHBOARD.root },
                        { name: 'Candidates', href: PATH_DASHBOARD.user.root },
                        { name: 'List' },
                    ]}
                    action={
                        <Button
                            component={NextLink}
                            href={PATH_DASHBOARD.user.new}
                            variant="contained"
                            startIcon={<Iconify icon="eva:plus-fill" />}
                        >
                            New User
                        </Button>
                    }
                />*/}

			<Card>
				{/*<Tabs
                        value={filterStatus}
                        onChange={handleFilterStatus}
                        sx={{
                            px: 2,
                            bgcolor: 'background.neutral',
                        }}
                    >
                        {STATUS_OPTIONS.map((tab) => (
                            <Tab key={tab} label={tab} value={tab} />
                        ))}
                    </Tabs>

                    <Divider />

                    <UserTableToolbar
                        isFiltered={isFiltered}
                        filterName={filterName}
                        filterRole={filterRole}
                        optionsRole={ROLE_OPTIONS}
                        onFilterName={handleFilterName}
                        onFilterRole={handleFilterRole}
                        onResetFilter={handleResetFilter}
                    />*/}

				<TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
					<TableSelectedAction
						dense={dense}
						numSelected={selected.length}
						rowCount={tableData.length}
						onSelectAllRows={(checked) =>
							onSelectAllRows(
								checked,
								tableData.map((row) => row.sk)
							)
						}
						action={
							<Tooltip title='Delete'>
								<IconButton color='primary' onClick={handleOpenConfirm}>
									<Iconify icon='eva:trash-2-outline' />
								</IconButton>
							</Tooltip>
						}
					/>

					<Scrollbar>
						<Table size={dense ? 'small' : 'medium'} sx={{ minWidth: 800 }}>
							<TableHeadCustom
								order={order}
								orderBy={orderBy}
								headLabel={TABLE_HEAD}
								rowCount={tableData.length}
								numSelected={selected.length}
								onSort={onSort}
								//onSelectAllRows={(checked) =>
								//onSelectAllRows(
								//checked,
								//tableData.map((row) => row.id)
								//)
								//}
							/>

							<TableBody>
								{dataFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
									<JobDescriptionTableRow
										key={row?.sk}
										row={row}
										onViewJobDescription={onViewJobDescription}
										//selected={selected.includes(row.id)}
										//onSelectRow={() => onSelectRow(row.id)}
										//onDeleteRow={() => handleDeleteRow(row.id)}
										//onEditRow={() => handleEditRow(row.name)}
									/>
								))}

								<TableEmptyRows height={denseHeight} emptyRows={emptyRows(page, rowsPerPage, tableData.length)} />

								<TableNoData isNotFound={isNotFound} />
							</TableBody>
						</Table>
					</Scrollbar>
				</TableContainer>

				<TablePaginationCustom
					count={dataFiltered.length}
					page={page}
					rowsPerPage={rowsPerPage}
					onPageChange={onChangePage}
					onRowsPerPageChange={onChangeRowsPerPage}
					//
					//dense={dense}
					//onChangeDense={onChangeDense}
				/>
			</Card>
			<Stack direction='row' justifyContent='flex-end' alignItems='center' gap={2} mt={2}>
				<UserFeedback type={type} event_id={event_id} />
			</Stack>
			{/*</Container>*/}

			{/*<ConfirmDialog
                open={openConfirm}
                onClose={handleCloseConfirm}
                title="Delete"
                content={
                    <>
                        Are you sure want to delete <strong> {selected.length} </strong> items?
                    </>
                }
                action={
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => {
                            handleDeleteRows(selected);
                            handleCloseConfirm();
                        }}
                    >
                        Delete
                    </Button>
                }
            />*/}
		</>
	);
}

// ----------------------------------------------------------------------

function applyFilter({ inputData, comparator, filterName, filterStatus, filterRole }) {
	const stabilizedThis = inputData.map((el, index) => [el, index]);

	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	inputData = stabilizedThis.map((el) => el[0]);

	if (filterName) {
		inputData = inputData.filter((user) => user.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1);
	}

	if (filterStatus !== 'all') {
		inputData = inputData.filter((user) => user.status === filterStatus);
	}

	if (filterRole !== 'all') {
		inputData = inputData.filter((user) => user.role === filterRole);
	}

	return inputData;
}
