# F1-API

Open-Source Informational API for all the Motorsports Fans out there

## This API is not hosted online anymore

<center>
<img src='./README assets/F1Logo.png' alt = 'F1 Logo' height='300' width='500'>
</center>



# EndPoints

## DriversChampionships:

-To get all the Driver's Championships
```
http://3.138.85.199:8080/drivers-championships
```

-To get Driver's Championships of a Particular Year
```
http://3.138.85.199:8080/drivers-championships/year
```
Example:
```
http://3.138.85.199:8080/drivers-championships/2020

Output:
{
    "_id":"605fb6b4e28f85077c343186",
    "year":"2020",
    "driverName":"Lewis Hamilton",
    "teamName":"Mercedes",
    "__v":0
}
```

## ConstructorsChampionship:

-To get all the Constructor's Championships
```
http://3.138.85.199:8080/team-championships
```

-To get Constructor's Championships of a Particular Year
```
http://3.138.85.199:8080/team-championships/year
```
Example:
```
http://3.138.85.199:8080/team-championships/2020

Output:
{
    "_id":"6062289870ac6d26fc05bb4d",
    "year":"2020",
    "teamName":"Mercedes",
    "driver1Name":"Lewis Hamilton",
    "driver2Name":"Valtteri Bottas",
    "__v":0
}
```

