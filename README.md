# F1-API

Open-Source Informational API for all the Motorsports Fans out there
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

