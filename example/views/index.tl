<!doctype html>
<html>
<head>
    <title>index template</title>
</head>
<body>
    <meal>
        ${d.eat.reduce((str,food)=>str+'<eat>'+food+'</eat>', '')}
    </meal>
 
    <sport>
        ${d.sport ? 'you are in a good way' : 'change it now'}
    </sport>
 
    <dessert>
    </dessert>
</body>
</html>
