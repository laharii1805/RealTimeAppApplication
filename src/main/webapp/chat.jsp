<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
    String username = (String) session.getAttribute("username");
    if (username == null) {
        response.sendRedirect("index.html");
    }
%>
<!DOCTYPE html>
<html>
<head>
    <title>Chat Room</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <script src="script.js"></script>
</head>
<body>
    <div class="chat-container">
        <h2>Welcome, <%= username %>!</h2>
        <div id="chat-box"></div>
        <input type="text" id="message" placeholder="Type a message..." onkeypress="sendMessage(event)">
    </div>
</body>
</html>
