import { ThemeProvider } from '@mui/material';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import RouteWithoutAuthentication from './components/Auth/RouteWithoutAuthentication';
import ToastMessage, { ToastType } from './components/Common/ToastMessage/ToastMessage';
import { LayoutWithNav } from './components/Layout/LayoutWithNav';
import Login from './pages/Auth/Login/Login';
import SignUp from './pages/Auth/SignUp/SignUp';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import { logout } from './redux/slices/authSlice';
import store, { persistor } from './redux/store';
import theme from './theme';

function App() {
  const checkExpiredAndLogout = async (error: any) => {
    // Check Expired Time here to logout;
    try {
      // Check user session
    } catch (err: any) {
      if (!!store.getState()?.auth?.user) {
        queryClient.invalidateQueries();
        persistor.purge();
        store.dispatch(logout());
        toast(
          <ToastMessage
            text={'Your session has expired. Please Sign in again'}
            type={ToastType.ERROR.type}
          />,
        );
      }
    }
  };

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        onError: (error: any) => {
          // Fallback Error Catch If we don't define onError when using useQuery
          toast(
            <ToastMessage
              text={error?.message ?? 'Something went wrong.'}
              type={ToastType.ERROR.type}
            />,
          );
        },
      },
      mutations: {
        retry: false,
        onError: (error: any) => {
          // Fallback Error Catch If we don't define onError when using useMutate
          toast(
            <ToastMessage
              text={error?.message ?? 'Something went wrong.'}
              type={ToastType.ERROR.type}
            />,
          );
        },
      },
    },
    queryCache: new QueryCache({
      onError: checkExpiredAndLogout,
    }),
    mutationCache: new MutationCache({
      onError: checkExpiredAndLogout,
    }),
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <HelmetProvider>
        <Helmet>
          <title>Your title here</title>
        </Helmet>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route element={<LayoutWithNav />}>
                    <Route
                      element={
                        <RouteWithoutAuthentication>
                          <Outlet />
                        </RouteWithoutAuthentication>
                      }
                    >
                      <Route path="/signup" element={<SignUp />} />
                      <Route path="/login" element={<Login />} />
                    </Route>
                    <Route
                      element={
                        <ProtectedRoute>
                          <Outlet />
                        </ProtectedRoute>
                      }
                    >
                      {/* Private routes here */}
                    </Route>
                  </Route>
                  <Route path="/*" element={<PageNotFound />} />
                </Routes>
              </BrowserRouter>
              <ToastContainer
                className="toaster-container"
                position="bottom-right"
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                closeButton={false}
              />
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
