import React, { useState } from 'react';

const JobForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    job_thumbnail: '',
    vacancy_count: '',
    job_context: '',
    job_responsibilities: [],
    employment_status: '',
    educational_requirements: '',
    experience_requirements: '',
    age_range: '',
    gender: '',
    workplace: '',
    location: '',
    salary: {
      range: '',
      review: '',
    },
    benefits: {
      festival_bonus: '',
      compensation: [],
      weekly_holidays: '',
    },
    application_deadline: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        benefits: {
          ...prevData.benefits,
          compensation: checked
            ? [...prevData.benefits.compensation, value]
            : prevData.benefits.compensation.filter((item) => item !== value),
        },
      }));
    } else {
      setFormData({
        ...formData,
        [name]: type === 'number' ? parseInt(value) : value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Job posted successfully!');
        setFormData({
          title: '',
          job_thumbnail: '',
          vacancy_count: '',
          job_context: '',
          job_responsibilities: [],
          employment_status: '',
          educational_requirements: '',
          experience_requirements: '',
          age_range: '',
          gender: '',
          workplace: '',
          location: '',
          salary: {
            range: '',
            review: '',
          },
          benefits: {
            festival_bonus: '',
            compensation: [],
            weekly_holidays: '',
          },
          application_deadline: '',
        });
      } else {
        alert('Failed to post job.');
      }
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-xl mb-4">Post a Job</h2>
      
      <label className="block mb-2">
        Job Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </label>

      <label className="block mb-2">
        Job Thumbnail URL:
        <input
          type="url"
          name="job_thumbnail"
          value={formData.job_thumbnail}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </label>

      <label className="block mb-2">
        Vacancy Count:
        <input
          type="number"
          name="vacancy_count"
          value={formData.vacancy_count}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </label>

      <label className="block mb-2">
        Job Context:
        <textarea
          name="job_context"
          value={formData.job_context}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </label>

      <label className="block mb-2">
        Job Responsibilities (comma separated):
        <textarea
          name="job_responsibilities"
          value={formData.job_responsibilities.join(', ')}
          onChange={(e) => handleChange({ target: { name: 'job_responsibilities', value: e.target.value.split(', ') } })}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </label>

      <label className="block mb-2">
        Employment Status:
        <select
          name="employment_status"
          value={formData.employment_status}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        >
          <option value="">Select</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Contract">Contract</option>
        </select>
      </label>

      <label className="block mb-2">
        Educational Requirements:
        <input
          type="text"
          name="educational_requirements"
          value={formData.educational_requirements}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </label>

      <label className="block mb-2">
        Experience Requirements:
        <input
          type="text"
          name="experience_requirements"
          value={formData.experience_requirements}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </label>

      <label className="block mb-2">
        Age Range:
        <input
          type="text"
          name="age_range"
          value={formData.age_range}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </label>

      <label className="block mb-2">
        Gender:
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Both">Male & Female Both</option>
        </select>
      </label>

      <label className="block mb-2">
        Workplace:
        <select
          name="workplace"
          value={formData.workplace}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        >
          <option value="">Select</option>
          <option value="Office">Work at Office</option>
          <option value="Remote">Remote</option>
        </select>
      </label>

      <label className="block mb-2">
        Location:
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </label>

      <label className="block mb-2">
        Salary Range (e.g., 20,000 - 25,000):
        <input
          type="text"
          name="salary.range"
          value={formData.salary.range}
          onChange={(e) => handleChange({ target: { name: 'salary.range', value: e.target.value } })}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </label>

      <label className="block mb-2">
        Salary Review:
        <input
          type="text"
          name="salary.review"
          value={formData.salary.review}
          onChange={(e) => handleChange({ target: { name: 'salary.review', value: e.target.value } })}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </label>

      <label className="block mb-2">
        Festival Bonus:
        <input
          type="number"
          name="benefits.festival_bonus"
          value={formData.benefits.festival_bonus}
          onChange={(e) => handleChange({ target: { name: 'benefits.festival_bonus', value: e.target.value } })}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </label>

      <div className="mb-2">
        Compensation:
        <div className="flex flex-col">
          {['Mobile bill', 'Performance Bonus', 'Profit Share'].map((item) => (
            <label key={item} className="flex items-center">
              <input
                type="checkbox"
                value={item}
                checked={formData.benefits.compensation.includes(item)}
                onChange={handleChange}
                className="mr-2"
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      <label className="block mb-2">
        Weekly Holidays:
        <input
          type="number"
          name="benefits.weekly_holidays"
          value={formData.benefits.weekly_holidays}
          onChange={(e) => handleChange({ target: { name: 'benefits.weekly_holidays', value: e.target.value } })}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </label>

      <label className="block mb-2">
        Application Deadline:
        <input
          type="date"
          name="application_deadline"
          value={formData.application_deadline}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </label>

      <button type="submit" className="mt-4 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Submit Job
      </button>
    </form>
  );
};

export default JobForm;
