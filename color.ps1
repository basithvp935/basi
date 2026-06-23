Add-Type -AssemblyName System.Drawing
$imgPath = "c:\AL HAZMI\assets\images\AlHazmi Final Logo (4) (1)_page-0001.jpg"
$img = New-Object System.Drawing.Bitmap $imgPath
$colors = @{}

for ($x = 0; $x -lt $img.Width; $x += 10) {
    for ($y = 0; $y -lt $img.Height; $y += 10) {
        $c = $img.GetPixel($x, $y)
        $hex = '#{0:X2}{1:X2}{2:X2}' -f $c.R, $c.G, $c.B
        if ($hex -ne '#FFFFFF' -and $hex -ne '#000000' -and $hex -ne '#FEFEFE' -and $hex -ne '#010101') {
            $colors[$hex]++
        }
    }
}

$colors.GetEnumerator() | Sort-Object Value -Descending | Select-Object -First 10 | Format-Table -AutoSize
