import jsPDF from 'jspdf'
import emailjs from 'emailjs-com'

const htmltomail=(lawyer,client,date,recipient,rupees,product)=>{

    const target={
        date: date,
        rupees: `${rupees['rs']} (${rupees['words']})`,
        reason: product['reason'],
        action: product['action'],
        lawyer_name: lawyer['name'],
        lawyer_address:lawyer['address'],
        lawyer_id:lawyer['id'],
        client_name: client['name'],
        client_address:client['address'],
        client_mail:client['email'],
        recipient_name: recipient['name'],
        recipient_address: recipient['address'],
        recipient_mail: recipient['email'],
        order_id:product['id']
    }

    const btn=document.querySelector('#htmltoemailbtn')
    btn.textContent='Sending.....'
    btn.disabled=true

    emailjs.send('service_f4av84q','template_x1omc2i',target,'nAtPfGEQGrscudxr6')
    .then((result) => {
        console.log(result.text);
        alert("Mail is send succesfully")
        btn.textContent='Send mail'
        btn.disabled=false

    }, (error) => {
        console.log(error.text);
        alert('Error in sending mail , Please try again')
        btn.textContent='Send mail'
        btn.disabled=false
    });
}

const htmltopdf=async(htmlText,fileName)=>{

    document.querySelectorAll('.lnformrows').forEach((row)=>{
        row.style=null
    }) 

    var doc=new jsPDF('p','pt','a4')
    doc.html(htmlText,{
        margin:[40,1,40,1],
        autoPaging:'text',
        callback:function(pdf){
            var pageCount=doc.internal.getNumberOfPages();
            pdf.deletePage(pageCount+1);
            pdf.save(`${fileName}.pdf`);
        }
    })
}

const htmltodocx=async(htmlText,fileName)=>{

    document.querySelectorAll('.lnformrows').forEach((row)=>{
        row.style=null
    }) 

    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";
    var html = preHtml+htmlText.innerHTML+postHtml;

    var blob = new Blob(['\ufeff', html], {
        type: 'application/msword'
    });
    
    // Specify link url
    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
    
    // Specify file name
    fileName = fileName?fileName+'.doc':'document.doc';
    
    // Create download link element
    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob ){
        navigator.msSaveOrOpenBlob(blob, fileName);
    }else{
        // Create a link to the file
        downloadLink.href = url;
        
        // Setting the file name
        downloadLink.download = fileName;
        
        //triggering the function
        downloadLink.click();
    }
    
    document.body.removeChild(downloadLink);
}

module.exports={
    htmltopdf,
    htmltodocx,
    htmltomail
}