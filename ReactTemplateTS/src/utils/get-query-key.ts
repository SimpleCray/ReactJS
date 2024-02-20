export const MAIN_DASHBOARD = 'MAIN_DASHBOARD';

const getQueryKey = {
  mainDashboardQueryKey: (page: number): any[] => [MAIN_DASHBOARD, page],
};

export default getQueryKey;
