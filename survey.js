const header = document.getElementById("rate");
const btns = header.getElementsByClassName("button");
//btns.classList.add("active");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "active");
        this.classname += "active";

        if (i < 11) {
            const button = document.querySelector('.con');
            const con = document.querySelector('#rate');
            const one_click = document.querySelector('button');
            const box1 = document.querySelector('#box1');
            const para_text = document.getElementById('info');
            const box = document.getElementById('star');
            const cir = document.getElementById('cir');
            const h3 = document.querySelector('.h3');
            const new_back = document.createElement('div');

            new_back.setAttribute('class', 'para');
            new_back.innerHTML = `You selected ${i+1} out of 10`;
            new_back.style.color = " hsl(25, 97%, 53%)";
            new_back.style.textAlign = "center";
            new_back.style.lineHeight = "30px";
            new_back.style.backgroundColor = 'hsl(216, 12%, 8%)';
            new_back.style.marginTop = "170px";
            new_back.style.marginLeft = "80px";
            new_back.style.width = "200px";
            new_back.style.height = "30px";
            new_back.style.borderRadius = "25px";
            document.getElementById('box1').appendChild(new_back);

            const ima_new = document.createElement("div");
            ima_new.setAttribute('class', 'thank');
            const image = document.createElement('img');
            image.src = "rate.svg";
            ima_new.appendChild(image);
            image.style.marginTop = "-80px";
            image.style.marginLeft = "90px";
            image.style.position = "absolute";
            image.style.zIndex = "1";
            box1.appendChild(ima_new);



            const text_app = document.createElement("div");
            text_app.innerHTML = "Thank You!";
            text_app.style.fontWeight = "400";
            text_app.style.fontSize = "25px";
            text_app.style.color = "white";
            text_app.style.marginTop = "120px";
            text_app.style.marginLeft = "120px";
            text_app.style.position = "absolute";
            text_app.style.zIndex = "1";
            box1.appendChild(text_app);

            const para1 = document.createElement("div");
            para1.innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
            para1.setAttribute('class', 'para');
            para1.style.color = "hsl(216, 12%, 54%)";
            para1.style.position = "absolute";
            para1.style.zIndex = "1";
            para1.style.textAlign = "center";
            para1.style.marginTop = "170px";
            box1.appendChild(para1)
                //document.getElementById('box1').appendChild(new_back);
            para_text.remove();
            box.remove();
            cir.remove();
            con.remove();
            h3.remove();
            button.remove();
        }
    });
}
