/**
 * /*
 *
 * @format
 * @version 2.0.0
 * @author Ishfaq Maknoo
 * @license MIT
 */

class EasyHTTP {
	//make an http get request
	async get(url) {
		const response = await fetch(url);
		const resData = await response.json();
		return resData;
	}

	//make an http post request
	post(url, data) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(data)
			})
				.then(res => res.json())
				.then(data => resolve(data))
				.catch(err => reject(err))
		})
  }
  
  	//make an http put request
	async put(url, data) {
		 const response = await fetch(url, {
				method: 'PUT',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(data)
			});
			const resData = await response.json();
			return resData;
		
  
  //make an http delete request
  delete(url, data) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'delete',
				headers: {
					'Content-type': 'application/json'
				}
			})
				.then(res => res.json())
				.then(() => resolve('Data deleted'))
				.catch(err => reject(err))
		})
  }
}
