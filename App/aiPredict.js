function aiPredict() {
    rr += Math.abs(aiTry(nextNext()));
    rp += Math.abs(aiTry(nextPrev()));
    rs += Math.abs(aiTry(nextSame()));
    pr += Math.abs(aiTry(prevNext()));
    pp += Math.abs(aiTry(prevPrev()));
    ps += Math.abs(aiTry(prevSame()));
    sr += Math.abs(aiTry(sameNext()));
    sp += Math.abs(aiTry(samePrev()));
    ss += Math.abs(aiTry(sameSame()));



    aiWinTotal = rr + rp + rs + pr + pp + ps + sr + sp + ss;
    rrp = (rr/aiWinTotal).toFixed(4);
    rpp = (rp/aiWinTotal).toFixed(4);
    rsp = (rs/aiWinTotal).toFixed(4);
    prp = (pr/aiWinTotal).toFixed(4);
    ppp = (pp/aiWinTotal).toFixed(4);
    psp = (ps/aiWinTotal).toFixed(4);
    srp = (sr/aiWinTotal).toFixed(4);
    spp = (sp/aiWinTotal).toFixed(4);
    ssp = (ss/aiWinTotal).toFixed(4);


    var strategies = [rrp, rpp, rsp, prp, ppp, psp, srp, spp, ssp]
    var max_of_array = Math.max.apply(Math, strategies);

    console.log('Calculate all result of all possible strategies')

    
    
    if(max_of_array == rrp) {
        console.log('Yu')
        aiMoveInt = nextNext();
    }
    if(max_of_array == rpp) {
        aiMoveInt = nextPrev();
    }
    if(max_of_array == rsp) {
        aiMoveInt = nextSame();
    }
    if(max_of_array == prp) {
        aiMoveInt = prevNext();  
    }
    if(max_of_array == ppp) {
        aiMoveInt = prevPrev();
    }
    if(max_of_array == psp) {
        aiMoveInt = prevSame();
    }
    if(max_of_array == srp) {
        aiMoveInt = sameNext();
    }
    if(max_of_array == spp) {
        aiMoveInt = samePrev(); 
    }
    if(max_of_array == ssp) {
        aiMoveInt = sameSame();
    }
    return aiMoveInt;

}







