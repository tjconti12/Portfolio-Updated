const apiUrl =
	window.location.hostname === 'localhost'
		? 'http://localhost:8080/send'
		: 'https://tylerconti-portfolio-server.herokuapp.com/send'

export default apiUrl