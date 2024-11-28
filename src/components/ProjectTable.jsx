// src/components/ProjectTable.jsx
import React, { useEffect, useState } from 'react';

const ProjectTable = ({ data }) => {
  const [projects, setProjects] = useState(data);

  useEffect(() => {
    setProjects(data);
  }, [data]);

  const keys = projects.length > 0 ? Object.keys(projects[0]) : [];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-azulGris" id="tableProjects">
        <thead className="bg-paleBlue text-gray-700">
          <tr>
            {keys.map((key) => (
              <th key={key} className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-700">
                {key}
              </th>
            ))}
            <th className="px-6 py-3 border-b border-gray-300 text-center text-sm font-medium text-gray-700">Acciones</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {projects.map((project) => (
            <tr key={project.projectId} className="hover:bg-gray-50">
              {keys.map((key) => (
                <td key={key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {typeof project[key] === 'object' ? JSON.stringify(project[key]) : project[key]}
                </td>
              ))}
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">Edit</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mr-2">Delete</button>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2">To Test</button>
                <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">To Prod</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
