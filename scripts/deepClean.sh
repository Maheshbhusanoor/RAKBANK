rm -fr $TMPDIR/react-*
rm -fr $TMPDIR/metro-*
rm -fr $TMPDIR/haste-map-metro-4-*
rm -fr $TMPDIR/npm*
rm -fr $TMPDIR/*.json.gzip
# Global
watchman watch-del-all

rm -rf ./node_modules
rm -rf ./ios/Pods
rm -f package-lock.json
rm -f ios/Podfile.lock
rm -rf ./android/build

npm install
cd ios;
pod install;
pod install --repo-update;
cd ..;
