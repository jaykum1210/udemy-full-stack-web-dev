    console.clear();

    function Person(Name, Age, Class, Year, Place){
        this.Name = Name;
        this.Age = Age;
        this.Class = Class;
        this.Year = Year;
        this.Place = Place;
        this.clean = function ccl(){
            console.log("The room is cleaning");
        }
    }


    var a =new Person("Jay Kumawat", 20, "2nd Year", 2005, ["Jaipur", "Mumbai"]);

    console.log(a);

    console.log(a.Year);

    console.log(a.clean);
addEventListener()