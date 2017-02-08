for (var i = 0; i <= 100000; i += 1){
    for (var j = 0; j <= 1000; j += 1){
        for (var k = 0; k <= 100; k += 1){
            var l = i * j * k;
        }
    }
}
postMessage(l)