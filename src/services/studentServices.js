import api from '../api';
export const registerStudent = (formData) => {
  return api.post('/register', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
export const loginStudent = (credentials) => api.post('/login', credentials);
export const logoutStudent = () => api.post('/logout');
export const updateStudent = (studentId, data) =>
  api.post(`/update-student/${studentId}`, data);
export const deleteStudent = (studentId) =>
  api.post(`/delete-student/${studentId}`);
export const getAllSubjects = () => api.get('/get-all-subject');
export const initiateCardPayment = (paymentData) =>
  api.post('/card-payment', paymentData);
export const initiateBankPayment = (paymentData) =>
  api.post('/bank-payment', paymentData);
export const verifyPayment = (data) => api.post('/verify-payment', data);
export const sendForgotPasswordOTP = (email) =>
  api.post('/send-forgot-password-otp', { email });
export const forgotPassword = (otp, newPassword) =>
  api.post('/forgot-password', { otp, newPassword });