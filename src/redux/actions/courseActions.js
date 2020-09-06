const courseActionsTypes = { CREATE_COURSE: 'CREATE_COURSE'};
const createCourse = (course) => {
  return {type: courseActionsTypes.CREATE_COURSE,course};
};

export { courseActionsTypes, createCourse };

