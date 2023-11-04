<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>
<body>
    <form action="">
        <label htmlFor="fname">Fname:</label>
        <input type="text" name="fname" />
        <label htmlFor="email">EmailId:</label>
        <input type="text" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="number" name="password" />
        <label htmlFor="radio">Gender</label>
        <input type="radio" name="gender" value="male" />Male
        <input type="radio" name="gender"value="female" />female
        <label htmlFor="checkbox">vehicles</label>
        <input type="checkbox" name="students" value="auto" />Auto
        <input type="checkbox" name="students" value="bike" />Bike
        <input type="checkbox" name="students"  value="tractor"/>Tractor
        <label htmlFor="select">courses:</label>
        <select name="courses" id="select">
            <option value="javascript">JAVASCRIPT</option>
            <option value="java">JAVA</option>
            <option value="python">python</option>
           
        </select>

        <button>SUBMIT</button>
    </form>
</body>
</html>