const { courses, categories } = require('./data');
const resolvers = {
    // QUERY
    Query: {
        courses: () => courses,
        course: (parent, args) => courses.find(item => item.id == args.id),
        categories: () => categories,
        category:  (parent, args) => categories.find(item => item.id == args.id),
    },
    Course: {
        category: (parent,args) => {
            return categories.find(item => item.id === parent.categoryId);
        }
    },
    Category: {
        courses: (parent,args)=>{
            return courses.filter(course => course.categoryId === parent.id);
        }
    },
    // MUTATION
    Mutation: {
        createCategory: (parent,args) => {
            categories.push(args);
            return args;
        },
        createCourse: (parent,args)=>{
            courses.push(args);
            return args;
        }
    }
}
module.exports = resolvers
