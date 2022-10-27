deixe  tabuada  =  5 ;

função  escreva ( ) {
    documento . escreva ( tabuada  +  " x 1 = "  +  ( tabuada * 1 )  +  "<br>" ) ;
    documento . escreva ( tabuada  +  " x 2 = "  +  ( tabuada * 2 )  +  "<br>" ) ;
    documento . escreva ( tabuada  +  " x 3 = "  +  ( tabuada * 3 )  +  "<br>" ) ;
    documento . escreva ( tabuada  +  " x 4 = "  +  ( tabuada * 4 )  +  "<br>" ) ;
    documento . escreva ( tabuada  +  " x 5 = "  +  ( tabuada * 5 )  +  "<br>" ) ;
    documento . escreva ( tabuada  +  " x 6 = "  +  ( tabuada * 6 )  +  "<br>" ) ;
    documento . escreva ( tabuada  +  " x 7 = "  +  ( tabuada * 7 )  +  "<br>" ) ;
    documento . escreva ( tabuada  +  " x 8 = "  +  ( tabuada * 8 )  +  "<br>" ) ;
    documento . escreva ( tabuada  +  " x 9 = "  +  ( tabuada * 9 )  +  "<br>" ) ;
    documento . escreva ( tabuada  +  " x 10 = "  +  ( tabuada * 10 )  +  "<br>" ) ;
}

função  minhaTabuada ( ) {
    for ( deixe  i  =  10 ;  i  >=  1 ;  i -- ) {
        documento . escreva ( "Tabuada do "  +  i  +  "<br>" ) ;
        for ( deixe  j  =  1 ;  j  <=  10 ;  j ++ ) {
            documento . escreva ( i  +  "x"  +  j  +  " = "  +  ( j * i )  +  "<br>" ) ;
        }
        documento . escreva ( "<br>" ) ;       
    }
}

função  cubo ( ) {
    for ( deixe  i  =  20 ;  i  >=  2 ;  i -- ) {
        documento . write ( "O cubo de " + i + " é " + i + " x " + i + " x " + i + " = " + ( i * i * i ) + "<br>" ) ;
    }
}
função  moeda ( atual ) {
    retorno  atual . toLocaleString ( 'pt-br' , { estilo : 'moeda' ,  moeda : 'BRL' } ) ;
}
 tapete de função ( ) {  
    deixe  v  =  documento . getElementById ( "valor" ) . valor ;
    seja  j  =  documento . getElementById ( "juros" ) . valor ;
    seja  t  =  documento . getElementById ( "bagunça" ) . valor ;
  
    if ( ! Número ( v ) ) {
        alert ( "O Capital deve ser numérico." ) ;
        documento . getElementById ( "juros" ) . valor  =  "" ;
        documento . getElementById ( "juros" ) . foco ( ) ;
        Retorna
    }
    if ( ! Número ( j ) ) {
        alert ( "Juros deve ser número." ) ;
        documento . getElementById ( "valor" ) . valor  =  "" ;
        documento . getElementById ( "valor" ) . foco ( ) ;
        Retorna
    }
    if ( ! Número ( t ) ) {
        alert ( "Juros deve ser número." ) ;
        documento . getElementById ( "meses" ) . valor  =  "" ;
        documento . getElementById ( "meses" ) . foco ( ) ;
        Retorna
    }
    seja  r  =  0 ;
    for ( deixe  i = 1 ;  i <= t ;  i ++ ) {
        r  =  v  *  ( 1 + ( j / 100 ) ) ;
        v  =  r ;
        //document.write("Mês " + i + " = " + moeda(r) + "<br>");
        
    }
    documento . getElementById ( "totalGeral" ) . innerHTML  =  "Total: "  + moeda ( r ) ;
    //document.write("Resultado " + moeda(r));
}
