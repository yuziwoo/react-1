a=0;b=0;p=['F','','D0','D+','C0','C+','B0','B+','A0','A+'];require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((v)=>{d = v.split(' ')[2];if(d !='P'){c= +v.split(' ')[1];a += p.indexOf(d)*c/2;b += c;}});console.log((a/b).toFixed(6));