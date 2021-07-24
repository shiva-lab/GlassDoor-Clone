import {
  get, post, destroy, put, apiUrl,
} from '..';

export const currentUser = () => get('currentUser');
export const loginUser = (type, d) => put(`login/${type}`, d);
export const signupCompany = (d) => post('signup/company', d);
export const signupEmployee = (d) => post('signup/employee', d);
export const updateCompany = (d) => put('company', d);
export const addJobPosting = (d) => post('jobPosting', d);
export const getJobPosting = () => get('jobPosting');
export const getJobPostingByCompanyId = (companyId) => get(`company/${companyId}/jobPosting`);
export const updateEmployee = (d) => put('employee', d);
export const searchCompany = (text) => get(`search/company?text=${text}`);
export const searchJobPosting = (text) => get(`search/jobPosting?text=${text}`);
export const getCompany = (id) => get(`company/profile/${id}`);
export const getJob = (id) => get(`job/${id}`);
export const applyJob = (id, d) => put(`jobApplication/${id}`, d);
export const withdrawJobApplication = (id) => destroy(`jobApplication/${id}`);
export const addResume = (id, d) => post(`resume/${id}`, d);
export const setPrimaryResume = (id) => put(`resume/primary/${id}`);
export const getCompanyJobApplications = () => get('company/jobApplications');
export const getEmployeeJobApplications = () => get('employee/jobApplications');
export const getEmployee = (id) => get(`employee/profile/${id}`);
export const setJobApplicationStatus = (id, d) => put(`company/jobApplication/status/${id}`, d);
export const addSalary = (id, d) => post(`employee/salary/${id}`, d);
export const addInterviewExperience = (id, d) => post(`interviewExperience/${id}`, d);
export const getInterviewExperiences = (id) => get(`interviewExperience/${id}`);
export const addReview = (id, d) => post(`review/${id}`, d);
export const getReviews = (id) => get(`review/${id}`);
export const getCompanyJobPosting = (id) => get(`jobPosting/company/${id}`);
export const addCompanyPhotos = (id, d) => post(`companyPhoto/${id}`, d);
export const getCompanyPhotos = (id) => get(`companyPhoto/${id}`);
export const getCompanyReport = () => get('company/report');
export const getCompanyReportByCompanyId = (companyId) => get(`company/${companyId}/report`);

export const logout = () => put('logout');
export const fetchReviews = (unApproved) => get(`admin/reviews/${unApproved}`);
export const fetchReviewsByCompanyIdAndStatus = (unApproved, companyId) => get(`admin/reviews/${companyId}/${unApproved}`);
export const approveAReview = (reviewId, status) => put(`admin/reviews/${reviewId}`, { status });
export const fetchCompanyPhotos = (unApproved) => get(`admin/companyPhotos/${unApproved}`);
export const approveAnImage = (companyPhotosId, status) => put(`admin/companyPhotos/${companyPhotosId}`, { status });
export const addHelpfulVotes = (reviewId) => put(`review/helpfulVote/${reviewId}`);
export const getEmployeeActivity = () => get('employee/activity');
export const getCompanyReviews = () => get('company/reviews');
export const replyToReview = (reviewId, reply) => put(`company/reply/${reviewId}`, { reply });
export const markFavorite = (reviewId, status) => put(`company/favoriteReviews/${reviewId}`, { status });
export const markFeatured = (reviewId) => put(`company/featuredReview/${reviewId}`);

export const fileUrl = (fileId) => {
  return `${apiUrl}/file/${fileId}`;
};

export const getAnalyticsData = () => get('admin/analytics');
