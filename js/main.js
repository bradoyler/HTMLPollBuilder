  var context = {
    barchartheader: "Poll header", barchartdeck: "optional info", amountreported:"small note to reader", credit:"Credit: BradOyler.com",
    legendtext:"Legend text",
    chart1:{isHidden:'', title:'Poll 1 title',
        A:{name:'David A Candidate', percent:'47.1%', percentBar:'100'},
        B:{name:'Bob Runnerup',percent:'21.7%', percentBar:'46'}},
    chart2:{isHidden:'',title:'Poll 2 title',
        A:{name:'Ralph Won', percent:'47.1%', percentBar:'100'},
        B:{name:'Bob A Gop',percent:'41.2%', percentBar:'86'}
    }
                  };

$(function() { 
  run();
  $('input').on('change', function(e) {
      run();
  }); 
  $('#updateBtn').on('click', function(e) {
      e.preventDefault(); run();
  }); 
  $('#copyBtn').on('click', function(e) {
      e.preventDefault(); 
      $('textarea').focus();
      $('textarea').select();
  }); 
  
  $('#toggle1').on('click', function(e){
       e.preventDefault(); 
       context.chart1.isHidden==='' ? context.chart1.isHidden='is-hidden' : context.chart1.isHidden='';
        e.target.innerHTML==='Hide' ? e.target.innerHTML='Show':e.target.innerHTML='Hide';
       run();
  });
  $('#toggle2').on('click', function(e){
       e.preventDefault(); 
       console.log(e);
       context.chart2.isHidden==='' ? context.chart2.isHidden='is-hidden' : context.chart2.isHidden='';
       e.target.innerHTML==='Hide' ? e.target.innerHTML='Show':e.target.innerHTML='Hide';
       run();
  });
   
}());

function run() {
    $('#chart-form').bindObject(context);
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var html = template(context);
    $('.output').html(html);
}