#接口调用
```
		this.$axios.get('/?json=true')
				.then(function(res) {
					console.log(res);
				})
				.catch(function(error) {
					console.log(error);
				});
```