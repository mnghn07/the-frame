
# choose screen type
echo "Creating new screen..."

read -p "Which type of screen is it (auth/unauth): " screen_type
read -p "What is the screen name: " screen_name

if [ "$screen_type" == "auth" ]; then
  screen_path="../screens/auth/$screen_name"
else if ["$screen_type" == "unauth"]; then
  screen_path="../screens/unauth/$screen_name"
else 
  echo "Invalid screen type"
  exit 1
fi

mkdir -p $screen_path
touch $screen_path/$screen_name.tsx

# copy template file to newly created file
cp scripts/templates/screen.tsx $screen_path/$screen_name.tsx

# replace screen name in template file
open $screen_path/$screen_name.tsx

echo "Screen created successfully"

echo "Adding to navigator..."

# add screen to navigator
if [ "$screen_type" == "auth" ]; then
  navigator_path="../app/stacks/AuthNavigator.tsx"
else if ["$screen_type" == "unauth"]; then
  navigator_path="../app/stacks/UnauthNavigator.tsx"
else 
  echo "Invalid screen type"
  exit 1
fi

# add import statement
import_statement="import $screen_name from '@/screens/$screen_type/$screen_name/$screen_name';"
sed -i '' "s|// IMPORTS|// IMPORTS\n$import_statement|" $navigator_path

# add screen to navigator
screen_statement="<Stack.Screen name='$screen_name' component={$screen_name} />"
sed -i '' "s|// SCREENS|// SCREENS\n$screen_statement|" $navigator_path

echo "Screen added to navigator successfully"
