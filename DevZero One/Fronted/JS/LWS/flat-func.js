/* var javaScript = {
    name: 'javaScript', 
    libraries: ['react', 'angula', 'vue'],
    prinLibraries: function(){
        console.log(this);
        this.libraries.forEach(function(a){
            console.log(`${this.name} love ${a}`);
        })
    }
} */

const javaScript = {
    name: 'javascript', 
    libraries: ['react', 'angular', 'vue'], 
    printLibraries: function(){
        // this.libraries.forEach(a) => console.log(`${this.name} loves ${a}`));
    },
};

javaScript.printLibraries();