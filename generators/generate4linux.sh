#!/bin/sh


# == locate where we are ==
cd "`dirname $0`/../proto"
echo "we are in `pwd`"

# == prepare output directories ==
rm -rf ./out/cpp-3.7.1 ./out/c-nanopb
mkdir -p ./out/cpp-3.7.1 ./out/c-nanopb


# == compile with protoc ==
git log --pretty=oneline -n1; 
protoc --version;
for P in `find . -name "*.proto"` ; do PROTO=`basename ${P}`; echo "=== ${P} :: (${PROTO})";
  protoc --cpp_out=./out/cpp-3.7.1 \
  --proto_path=./claros \
  --proto_path=./claros/common \
  --proto_path=./claros/common/core \
  --proto_path=./claros/common/task \
  --proto_path=./claros/common/task/core \
  --proto_path=./claros/common/task/data \
  --proto_path=./claros/common/task/definition \
  --proto_path=./claros/common/configuration \
  --proto_path=./claros/common/form \
  --proto_path=./claros/common/form/definition \
  --proto_path=./claros/common/form/data \
  --proto_path=./claros/common/gis \
  --proto_path=./claros/common/computation \
  --proto_path=./claros/common/report \
  --proto_path=./claros/common/report/core \
  --proto_path=./claros/common/report/data \
  --proto_path=./claros/instrument \
  --proto_path=./claros/instrument/data \
  --proto_path=./claros/instrument/event/data \
  --proto_path=./claros/instrument/measurement/data \
  --proto_path=./claros/instrument/measurement/definition \
  --proto_path=./claros/operations/spreadsheet \
  ${PROTO}; 
done


# == draw include graph ==
echo "draw include graph ..."
echo "digraph claros {" > claros.dot
for P in `find . -name "*.proto"` ; do \
    PROTO="`basename ${P}`"; \
    echo "--- ${P} :: ${PROTO}"; \
    echo "${PROTO};" >> claros.dot; \
    grep -Eo 'import "[a-z_.]+"' ${P} | grep -Eo '".+"' | grep -Eo '[a-z_.]+' | xargs -rn1 echo "${PROTO} -> " >> claros.dot; \
done
echo "}" >> claros.dot
sed -i "s#.proto##g" claros.dot
#dot -Tpng -O -GRankdir=lr -Gratio=0.7 claros.dot 
dot -Tps -O -GRankdir=lr -Gratio=0.7 claros.dot 


# == C++ compile + build library ==
echo "C++ compile + build library ..."
cd ./out/cpp-3.7.1
find . -name "*.cc" | xargs g++ -std=c++11 -fPIC -c
g++ --shared -o libclaros.so.1.0 *.o


# == library checks ==
ls -ld libclaros.so.1.0 
ldd libclaros.so.1.0 
cd -

exit



# == compile with protoc (old way) - this fails ==
find . -name "*.proto" | sed -r "s#/?[^/]+/##g" | xargs protoc --cpp_out=./out/cpp-3.7.1 \
  --proto_path=./claros --proto_path=./claros/common --proto_path=./claros/instrument --proto_path=./claros/common/configuration \
  --proto_path=./claros/common/form --proto_path=./claros/common/gis

# == compile with nanobp - this fails ==
find . -name "*.proto" | sed -r "s#/?[^/]+/##g" | xargs protoc --nanopb_out=./out/c-nanopb \
  --plugin=/home/fusion/evaluations/nanopb/generator/protoc-gen-nanopb \
  --proto_path=./claros --proto_path=./claros/common --proto_path=./claros/instrument --proto_path=./claros/common/configuration \
  --proto_path=./claros/common/form --proto_path=./claros/common/gis

