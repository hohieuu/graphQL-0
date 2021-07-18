const typeDefs = `
	type Course {
		id: ID
		name: String
		category: Category
	}
	type Category {
		id: ID!
		name: String
		courses: [Course]
	}
	# ROOT TYPE
	type Query {
		courses: [Course]
		course(id: ID!): Course
		categories: [Category]
		category(id: ID!): Category
	}

	type Mutation {
		createCategory(id:ID!,name: String): Category
		createCourse(id:ID!,name: String, categoryId: ID!): Course
	}
`
module.exports = typeDefs
