let str="Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
// let sum=0;
// function findStringLength(str){
//     // daxil edilən str string məlumatının neçə xarakterdən ibarət olduğunu return edən metod yazın
//     for(i of str){
//         sum+=1;
//        }
//        console.log(sum);
// }
// findStringLength("Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
// );


sum=0;
function findStringLength(str){
    // daxil edilən str string məlumatının neçə hərfdən ibarət olduğunu return edən metod yazın
    let characters=["?';,.@&"];
    for(x of characters){
        for(i of str){
            console.log(x,i);
        }
        

    }

}
findStringLength("Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
)
