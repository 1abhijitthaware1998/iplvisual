function just(matches){
    const result = {},s=[];
    for(let i=0; i<12; i++){
        s[i]=2008+i
        let seasonsEachTeamWins={}
        for(let match of matches){
            if(match.season==s[i]){
                if(seasonsEachTeamWins[match.winner]){
                    seasonsEachTeamWins[match.winner]+=1
                }
                else{              
                    seasonsEachTeamWins[match.winner]=1
                }
            }
        }
        var unordered=seasonsEachTeamWins
        const ordered = {};
        Object.keys(unordered).sort().forEach(function(key) {
            ordered[key] = unordered[key];
        });
        //console.log(JSON.stringify(ordered));  

    result[s[i]]=ordered; 
    }
    return result;
}
  
/*
let result={},s=[];
            for(let i=0; i<12; i++){
                s[i]=2008+i
                let seasonsEachTeamWins={}
                rows.forEach(ele=>{
                    const row = ele.split(',')
                    let season = row[1]
                    let winner= row[10]
                    if(season==s[i]){
                        if(seasonsEachTeamWins[winner]){
                            seasonsEachTeamWins[winner]+=1
                        }
                        else{
                            seasonsEachTeamWins[winner]=1
                        }
                    }
                })
                result[s[i]]=seasonsEachTeamWins
            }
            console.log(result)
        }

    }*/
    
    //return result;

module.exports = just;