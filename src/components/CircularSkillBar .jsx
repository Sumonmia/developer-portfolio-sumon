import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularSkillBar = ({ skill, percentage }) => {
  return (
    <div style={{ margin: '10px', textAlign: 'center' }}>
      <h4>{skill}</h4>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textSize: '16px',
          pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
          textColor: '#FFFFFF',
          trailColor: '#d6d6d6',
        })}
      />
    </div>
  );
};

export default CircularSkillBar;
