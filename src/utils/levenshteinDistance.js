export function levenshteinDistance(str1, str2)  {
    const matriz = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));

    for (let i = 0; i <= str2.length; i++){
        matriz[i][0] = i;
    }

    for (let j = 0; j <= str1.length; j++){
        matriz[0][j] = j;
    }

    for(let i = 1; i <= str2.length; i++){
        for(let j = 1; j <= str1.length; j++){
            if (str2[i-1] === str1[j-1]){
                matriz[i][j] = matriz[i-1][j-1]
            } else {
                matriz[i][j] = Math.min(
                    matriz[i-1][j-1] + 1,
                    matriz[i][j-1] + 1,
                    matriz[i-1][j] + 1
                )
            }
        }
    }
    return matriz[str2.length][str1.length]
}

