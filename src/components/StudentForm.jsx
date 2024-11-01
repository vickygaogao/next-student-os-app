// src/components/StudentForm.tsx
import { useState } from 'react';


export default function StudentForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    studentId: '',
    name: '',
    age: '',
    gender: 'MALE',
    grade: '',
    class: '',
    major: '',
    contact: '',
    address: '',
    enrollmentDate: new Date().toISOString().split('T')[0],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit({
        ...formData,
        age: parseInt(formData.age),
      });
      // 清空表单
      setFormData({
        studentId: '',
        name: '',
        age: '',
        gender: 'MALE',
        grade: '',
        class: '',
        major: '',
        contact: '',
        address: '',
        enrollmentDate: new Date().toISOString().split('T')[0],
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">学号</label>
          <input
            type="text"
            required
            value={formData.studentId}
            onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">姓名</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">年龄</label>
          <input
            type="number"
            required
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">性别</label>
          <select
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
          >
            <option value="MALE">男</option>
            <option value="FEMALE">女</option>
            <option value="OTHER">其他</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">年级</label>
          <input
            type="text"
            required
            value={formData.grade}
            onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">班级</label>
          <input
            type="text"
            required
            value={formData.class}
            onChange={(e) => setFormData({ ...formData, class: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">专业</label>
          <input
            type="text"
            required
            value={formData.major}
            onChange={(e) => setFormData({ ...formData, major: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">联系方式</label>
          <input
            type="text"
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
          />
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">地址</label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">入学日期</label>
          <input
            type="date"
            required
            value={formData.enrollmentDate}
            onChange={(e) => setFormData({ ...formData, enrollmentDate: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          添加学生
        </button>
      </div>
    </form>
  );
}