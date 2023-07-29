import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
    // Fetch data from the API
 

    const response = await fetch('/api/builder');
    const data = await response.json();
  
    return {
      props: {
        data,
      },
    };
  };
  
 