/*!
 * Bootstrap v3.3.2 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

var itemId="";

var testDate = new Array(
                          {"item":"5mm055","price":"189.00","image":"https://img.alicdn.com/bao/uploaded/i2/TB1pjPtIpXXXXcwXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg","priceOrg":"350.00"},
                          {"item":"5mm056","price":"189.00","image":"https://img.alicdn.com/bao/uploaded/i2/TB1pjPtIpXXXXcwXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg","priceOrg":"350.00"},
                          {"item":"5mm057","price":"189.00","image":"https://img.alicdn.com/bao/uploaded/i2/TB1pjPtIpXXXXcwXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg","priceOrg":"350.00"},
{"item":"5mm058","price":"189.00","image":"https://img.alicdn.com/bao/uploaded/i2/TB1pjPtIpXXXXcwXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg","priceOrg":"350.00"},
{"item":"5mm059","price":"189.00","image":"https://img.alicdn.com/bao/uploaded/i2/TB1pjPtIpXXXXcwXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg","priceOrg":"350.00"},
{"item":"5mm0510","price":"189.00","image":"https://img.alicdn.com/bao/uploaded/i2/TB1pjPtIpXXXXcwXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg","priceOrg":"350.00"},
{"item":"5mm0511","price":"189.00","image":"https://img.alicdn.com/bao/uploaded/i2/TB1pjPtIpXXXXcwXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg","priceOrg":"350.00"},
{"item":"5mm0512","price":"189.00","image":"https://img.alicdn.com/bao/uploaded/i2/TB1pjPtIpXXXXcwXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg","priceOrg":"350.00"},
{"item":"5mm0513","price":"189.00","image":"https://img.alicdn.com/bao/uploaded/i2/TB1pjPtIpXXXXcwXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg","priceOrg":"350.00"},
{"item":"5mm0514","price":"189.00","image":"https://img.alicdn.com/bao/uploaded/i2/TB1pjPtIpXXXXcwXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg","priceOrg":"350.00"},
{"item":"5mm0515","price":"189.00","image":"https://img.alicdn.com/bao/uploaded/i2/TB1pjPtIpXXXXcwXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg","priceOrg":"350.00"},
{"item":"5mm0516","price":"189.00","image":"https://img.alicdn.com/bao/uploaded/i2/TB1pjPtIpXXXXcwXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg","priceOrg":"350.00"}
);





function readData(val) {
    var parentNode = document.getElementById("itemShowUl");

    var along = val.length/3 *320;
    parentNode.style.height=along+"px";


    for (var i = 0; i < val.length; i++) {

  var li = document.createElement("li");
  var img = document.createElement("img");
        img.setAttribute("src",val[i].image);
        img.setAttribute("id",val[i].item);
        img.setAttribute("data-toggle",'modal');
        img.setAttribute("data-target",'#itemDetail');
        li.appendChild(img);
        /*弹出logo*/
        var ig = document.createElement("i") ;
        ig.setAttribute("id",val[i].item+"i");
        ig.className="i_hover";
        li.appendChild(ig);
        parentNode.appendChild(li);
    }
}

function readJosn(val) {
    var kk =eval()
}


function putItemId(val){
   if(itemId!=""){
       itemId="";
   }else{
       itemId=val;
   }
}

function getItemInfo(val){
    for(var i=0;i<testDate.length;i++){
        if(testDate[i].item==val){
            document.getElementById('detailImage').src=testDate[i].image;
        }
    }
}