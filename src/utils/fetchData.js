
export const exerciseOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};

export const youtubeOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error in fetchData:", error);
      throw error;
    }
  };


