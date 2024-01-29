import React, { useEffect } from 'react';

const ProjectTest = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://bigdata.kepco.co.kr/openapi/v1/EVcharge.do	');
        const data = await response.json();
        console.log(data);

        // 여기에서 data를 상태로 저장하거나 다른 작업을 수행할 수 있습니다.
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      
    </div>
  );
};

export default ProjectTest;