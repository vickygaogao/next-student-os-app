// src/pages/index.tsx
import '../lib/amplifyConfig.js'
import { useState, useEffect } from 'react';
import StudentForm from '../components/StudentForm';
import { createStudent, getStudents } from '../lib/api';

export default function Home() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('---- useEffect')
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      
      const data = await getStudents();
      console.log('---- getStudents data', data)
      setStudents(data || []);
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateStudent = async (student) => {
    try {
      console.log('----- student', student)
      await createStudent(student);
      await fetchStudents();
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">学生信息管理</h1>
          <div className="bg-white shadow rounded-lg mb-8">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">添加新学生</h2>
              <StudentForm onSubmit={handleCreateStudent} />
            </div>
          </div>

          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6 text-black">
              <h2 className="text-lg font-medium text-gray-900 mb-4">学生列表</h2>
              {
                loading ? (
                  <p>加载中...</p>
                ) : (
                  <div className="grid gap-4">
                    {students.length}
                    {
                      students.map((student) => {
                        return (<div
                          key={student.id}
                          className="border rounded p-4 hover:bg-gray-50 "
                        >
                          <h3 className="font-bold">{student.name}</h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                            <p>学号: {student.studentId}</p>
                            <p>年级: {student.grade}</p>
                            <p>班级: {student.class}</p>
                            <p>专业: {student.major}</p>
                          </div>
                        </div>)
                      })
                    }
                  </div>
                )
              }
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}