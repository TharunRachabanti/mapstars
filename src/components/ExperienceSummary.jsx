import React from 'react';

const ExperienceSummary = () => {
  const containerStyle = {
    gridArea: 'experienceSummary',
    width: '100%',
    height: '300px',
    backgroundColor: 'lightpink',
    border: '2px solid black',
    borderRadius: '10px', // Adjust the value as per your preference
    padding: '10px', // Add some padding to make it look better
    boxSizing: 'border-box', // Make sure padding is included in the overall width/height
    overflow: 'auto',
     // Enable scroll for the content exceeding container height
  };

  const headingStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '10px 0', // Add margin to the heading
    textAlign: 'center', // Center the heading text
  };

  const summaryStyle = {
    fontSize: '1rem',
    lineHeight: '1.6', // Increase line height for better readability
  };

  // Your experience summary content here
  const experienceSummary = `Learning in most institutions incorporates both knowledge acquisition and putting skills into practice. My work placement was a full-time experience in different organizations, which was an incredible value opportunity. It offered me a chance to explore the universe of work and enjoy its beauty. The skills learned throughout the work placement are useful tools that I apply in running my daily errands. Precisely, I acquired the best communication, self-confidence, working up to deadlines, determination, and teamwork skills.

  Communication is a crucial factor any person ought to have to pass an intended message effectively. To be sincere, I had a problem communicating. Speaking before people, be it a small or large congregation, was a challenge. One of the goals I set prior to my placement was to reduce my anxiety when talking to large crowds more so, strangers. The experience I gained out of the work placement has contributed significantly to my communication skills. It has helped me a lot while working, and I am confident it will impact my future career. I engaged in public speaking during different occasion as a worker during my work experience. It helped boost my speaking and confidence skills. Furthermore, occasionally, we could engage in different interviews as the employees within the organization. It helped in removing anxiety and staying focused to what was required of me at the moment. Besides, it boosted my self-confidence since I can speak, selflessly, and without feeling uneasy.
  Furthermore, I learned that prioritization and reducing faffing are essentials in completing tasks. Initially, I sucked at finishing tasks on time. I was a procrastinator who could easily give up on challenging tasks. Therefore, the more I practiced is the reason I am now a time-conscious person. Ignoring things is not always okay since we are accountable for our actions. My work experience gave me the will-power and determination to persevere in order to succeed. Determination is a key factor for a young individual, more so a fresh graduate. Throughout the work experience, I gained not only determination but also the patience with people and tasks. I am thankful to my work experience since, it helped me a lot since now I can work effectively and deliver quality services irrespective of the weight it carries. Finally, I acquired teamwork competencies while working in groups of students. It taught me how to work in a team while interacting with people from diverse backgrounds. Teamwork enhances receipt of different ideas to strengthen the idea that would be presented by a single person. Working in teams ensures that errors in the workplace are minimized since it allows for consultation. Furthermore, working as a team is crucial since every member of the team has an equal opportunity, incase of any sickness, a member can be aided. An instance is where the team were so supporting is when I was became sick and thereby could not work. A couple of individuals worked in my place in addition to their work place. Therefore teamwork was one of my exciting practice which I live for and I believe it will help my future career.`;

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Experience Summary</h2>
      <p style={summaryStyle}>{experienceSummary}</p>
    </div>
  );
};

export default ExperienceSummary;
