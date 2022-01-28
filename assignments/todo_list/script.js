 var count=0;
        function add_todo_fun(){

            let input_value=document.getElementById('todo');
            let todo_container = document.querySelector('.todos');

            let count_todo = document.querySelector('#count_span');
           //let todo_ul = document.createElement('ul');

            let paraItem = document.createElement('p'); 
            let label = document.createElement('label');
            paraItem.style.backgroundColor="tomato";
            paraItem.setAttribute("key",count);
            label.innerText = input_value.value;
            paraItem.appendChild(label);
            //todo_ul.appendChild(listItem);
            todo_container.appendChild(paraItem);
            input_value.value="";

            count+=1;
            count_span.innerText=count;
            paraItem.addEventListener('click',function(e){

                console.log("I'm clicked");
                var keyy=e.target.getAttribute('key');
                console.log(keyy);
                document.querySelector(`p[key="${keyy}"`).remove();
            });

        }

        //var todo=document.querySelector('p');
        //console.log(todo);
        //todo.addEventListener('click',function(){
            //document.querySelector('p[key="0"]').remove();

       // });