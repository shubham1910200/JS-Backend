# HTTP return codes cheat sheet
- 1** Hold on 
- 2** Here you go 
- 3** Go away
- 4** You fucked up
- 5** I fucked up

# EJS Tags
<ul>
<% = vairable %>
<% console.log('hello')%>
<%- <h1>hello</h1> %>
<% % % %>
<% -include('header.ejs')%>
</ul>

# Express 
<h1>Basic routing</h1>
<p><b>Routing</b> refers to determine how an application to a client request to particular endpoint which is url and specific http request method(get,post and so on)</p>
<p>app.Method(Path,Handler)</p>
<ol>
Where:
<li>app is an instance of express </li>
<li> Method is an http request method </li>
<li>path is path on th server</li>
<li>Handle is a function executed when route is matched</li>
</ol>
<p>Respond with Hello World! on the homepage</p>

```javascript
app.get('/', (req, res) => {
  res.send('Hello World!')
})
```
<p>Respond to POST request on the root route (/), the application’s home page:</p>

```javascript
app.post('/', (req, res) => {
  res.send('Got a POST request')
})
```
<p>Respond to a PUT request to the /user route:</p>

```javascript
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})
```
<p>Respond to a DELETE request to the /user route:</p>

```javascript
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})
```
# Server static file in Express
- To serve static file such as image,css and js file, use the express.static build in middleware function in express.

```javascript
express.static(root, [options])
// or
app.use(express.static('public'))
```