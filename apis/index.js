import request from './request';

export const getResultApi = (body) => {
  return request({
    method: 'POST',
    url: `/survey/getTotalSurveyResult`,
    data: body,
  });
};

export const submitSurveyResultApi = (body) => {
  return request({
    method: 'POST',
    url: `/survey/submit`,
    data: body,
  });
};
