console.log(humanize('humpdey_dumpdey'));

function humanize(str) {
  var i, frags = str.split('_');
  console.log(frags)
  for (i=0; i<frags.length; i++) {
      console.log(i)
    frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    console.log(frags[i])
  }
  return frags.join(' ');
}

//Output Humpdey Dumpdey