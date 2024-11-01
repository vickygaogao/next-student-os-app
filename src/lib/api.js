// src/lib/api.ts
import { generateClient } from 'aws-amplify/api';

const client = generateClient();



export const createStudent = async (student) => {
  const mutation = `
    mutation CreateStudent(
      $studentId: String!
      $name: String!
      $age: Int!
      $gender: Gender!
      $grade: String!
      $class: String!
      $major: String!
      $contact: String
      $address: String
      $enrollmentDate: AWSDate!
    ) {
      createStudent(
        studentId: $studentId
        name: $name
        age: $age
        gender: $gender
        grade: $grade
        class: $class
        major: $major
        contact: $contact
        address: $address
        enrollmentDate: $enrollmentDate
      ) {
        id
        studentId
        name
        age
        gender
        grade
        class
        major
        contact
        address
        enrollmentDate
      }
    }
  `;
  console.log('---- createStudent', student)
  try {
    const response = await client.graphql({
      query: mutation,
      variables: { ...student },
  });
    return response.data.createStudent;
  } catch (error) {
    console.error('Error creating student:', error);
    throw error;
  }
};

export const getStudents = async () => {
  const query = `
    query GetStudents {
      getStudents {
        id
        studentId
        name
        age
        gender
        grade
        class
        major
        contact
        address
        enrollmentDate
      }
    }
  `;
  
  try {
    console.log('---- getStudents')
    const response = await client.graphql({
      query: query,
      operation: 'query',  // 明确指定操作类型
      operationName: 'GetStudents' // 操作名称
    });
    console.log('---- getStudents response', response)
    return response.data.getStudents;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};