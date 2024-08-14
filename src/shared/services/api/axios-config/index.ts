import axios from 'axios';

import { errorInterceptor, respondeInterceptor } from './interceptors';
import { Environment } from '@/shared/environment';

const Api = axios.create({
  baseURL: Environment.URL_BASE,
});

Api.interceptors.response.use(
  (response) => respondeInterceptor(response),
  (error) => errorInterceptor(error),
);

export { Api };
