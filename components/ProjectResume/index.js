import React from "react";

const ProjectResume = ({ name, dates, type, position, bullets }) => {
  const bulletsArray = Array.isArray(bullets) ? bullets : bullets.split(",");

  return (
    <div className="mt-5 w-full flex mob:flex-col desktop:flex-row justify-between">
      <div className="text-lg w-2/5">
        <h2>{dates}</h2>
        <h3 className="text-sm opacity-50">{type}</h3>
      </div>
      <div className="w-3/5">
        <h2 className="text-lg font-bold">{name}</h2>
        <h3 className="text-lg font-bold">{position}</h3>
        {bulletsArray && bulletsArray.length > 0 && (
          <ul className="list-disc">
            {bulletsArray.map((bullet, index) => (
              <li key={index} className="text-sm my-1 opacity-70">
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectResume;
