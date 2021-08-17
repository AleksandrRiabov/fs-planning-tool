
export const getSingleDayData = async(date) => {
	try{
	     const response = await fetch(`/api/day/${date}`);
	     const data = await response.json();
		  	
		  if (response.status === 404){
			  throw new Error(data.message)
		  }
		 return data;
	} catch(err) {
		throw new Error(err.message);
	}
}




