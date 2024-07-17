import { TESTTOKENABI, ERC20ABI } from "@/constant/DefaultValue";
import { selectToken } from "@/store/actions/tokenActions";
import { Button } from "@/ui/shadcn/components/ui/button";
import { Dialog, DialogContent } from "@/ui/shadcn/components/ui/dialog";
import { BrowserProvider, Contract, ethers, formatUnits } from "ethers";
import { Search } from "iconoir-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAccount, useBalance } from "wagmi";

const TokenModal = ({ show, setShow, initialTokenList, tokenType }) => {
  const { address } = useAccount();
  const [balance, setBalance] = useState(0);
  const balanceMainnet = useBalance({
    address: address,
    blockTag: 'latest',
  });
  const dispatch = useDispatch();
  const inToken = useSelector((state) => state.tokens.inToken);
  const outToken = useSelector((state) => state.tokens.outToken);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTokenList, setFilteredTokenList] = useState(initialTokenList);

  useEffect(() => {
    if (balanceMainnet?.data?.formatted) {
      console.log(Number(balanceMainnet.data.formatted).toFixed(4));
      setBalance(Number(balanceMainnet.data.formatted).toFixed(4));
    }
  }, [balanceMainnet.isSuccess, address]);

  const provider = new BrowserProvider(window.ethereum);
  const [tokenList, setTokenList] = useState(initialTokenList);

  useEffect(() => {
    const fetchBalances = async () => {
      try {
        const signer = await provider.getSigner();
        const updatedTokenList = await Promise.all(
          tokenList.map(async (token) => {
            try {
              if (token.type === 'token') {
                const contract = new Contract(token.address, ERC20ABI, signer);
                const balance = await contract.balanceOf(address);
                let formattedBalance = parseFloat(formatUnits(balance.toString(), token.decimals || 18));
                return { ...token, balance: formattedBalance };
              } else if (token.type === 'coin') {
                if (balance > 0) {
                  return { ...token, balance: balance };
                }
                return token;
              } else {
                const contract = new Contract(token.address, ERC20ABI, signer);
                const balance = await contract.balanceOf(address);
                let formattedBalance = parseFloat(formatUnits(balance.toString(), token.decimals || 18));
                return { ...token, balance: formattedBalance };
              }
            } catch (error) {
              return token; // Return the original token object in case of error
            }
          })
        );
        setTokenList(updatedTokenList);
        setFilteredTokenList(updatedTokenList);

        // Set default inToken and outToken
        if (updatedTokenList.length >= 4) {
          dispatch(selectToken('inToken', updatedTokenList[0]));
          dispatch(selectToken('outToken', updatedTokenList[3]));
        }
      } catch (error) {
        console.error('Error fetching signer or updating token list:', error);
      }
    };

    fetchBalances();
  }, [balance, dispatch]);

  const handleTokenSelect = (token) => {
    if (tokenType === 'inToken' && outToken && outToken.address === token.address) {
      dispatch(selectToken("outToken", inToken));
    }
    if (tokenType === 'outToken' && inToken && inToken.address === token.address) {
      dispatch(selectToken("inToken", outToken));
    }
    dispatch(selectToken(tokenType, token));
    setShow(false);
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredList = tokenList.filter(token =>
      token.name.toLowerCase().includes(query) ||
      token.symbol.toLowerCase().includes(query) ||
      token.address.toLowerCase().includes(query)
    );
    setFilteredTokenList(filteredList);
  };

  return (
    <Dialog modal open={show} onOpenChange={setShow}>
      <DialogContent className="bg-black border-red-500">
        <div className="relative pb-4 border-b border-b-gray-550">
          <h3 className="text-lg font-bold">Select Token</h3>
        </div>
        <div className="relative my-5">
          <div className="relative w-full h-9 bg-gray-850 border border-gray-550 outline-none flex items-center">
            <span className="w-9 h-9 flex items-center justify-center">
              <Search />
            </span>
            <input
              type="text"
              placeholder="Search by Name, Symbol, or address"
              className="w-full h-full p-2 bg-transparent outline-none placeholder:text-gray-550"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="relative w-full">
          <ul className="relative w-full h-full max-h-72 overflow-y-auto">
            {filteredTokenList && filteredTokenList.map((token, index) => (
              <li
                key={index}
                className="cursor-pointer select-none"
                onClick={() => handleTokenSelect(token)}
              >
                <div className="relative w-full py-2 px-3 flex items-center justify-between border border-transparent bg-transparent hover:border-gray-550 hover:bg-gray-850">
                  <div className="flex items-center gap-2">
                    <img
                      src={token?.logo ? token?.logo : "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ethereum-eth-icon.png"}
                      alt=""
                      className="w-7 h-7 bg-white p-1 rounded-full"
                    />
                    <div className="relative">
                      <h6 className="font-bold">{token?.name}</h6>
                      <span className="block text-xxs text-gray-400">{token?.label}</span>
                    </div>
                  </div>
                  <span className="block text-xs">{token?.balance ? Number(token?.balance).toFixed(4) : '0.00'}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TokenModal;


// import { TESTTOKENABI,ERC20ABI } from "@/constant/DefaultValue";
// import { selectToken } from "@/store/actions/tokenActions";
// import { Button } from "@/ui/shadcn/components/ui/button";
// import { Dialog, DialogContent } from "@/ui/shadcn/components/ui/dialog";
// import { BrowserProvider, Contract, ethers, formatUnits } from "ethers";
// import { Search } from "iconoir-react";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useAccount, useBalance } from "wagmi";

// const TokenModal = ({ show, setShow, initialTokenList, tokenType }) => {
//   const { address } = useAccount();
//   const [balance, setBalance] = useState(0);
//   const balanceMainnet = useBalance({
//     address: address,
//     blockTag: 'latest', 
//   });

//   useEffect(() => {
//     if (balanceMainnet?.data?.formatted) {
//       console.log(Number(balanceMainnet.data.formatted).toFixed(4));
//       setBalance(Number(balanceMainnet.data.formatted).toFixed(4));
//     }
//   }, [balanceMainnet.isSuccess,address]);

//   const provider = new BrowserProvider(window.ethereum);
//   const [tokenList, setTokenList] = useState(initialTokenList);

//   useEffect(() => {
//     const fetchBalances = async () => {
//         try {
//             const signer = await provider.getSigner();
//             const updatedTokenList = await Promise.all(
//                 tokenList.map(async (token) => {
//                     try {
//                         if (token.type === 'token') {
//                             const contract = new Contract(token.address, ERC20ABI, signer);
//                             const balance = await contract.balanceOf(address);
//                             let formattedBalance = 0;
                           
//                                 formattedBalance = parseFloat(formatUnits(balance.toString(), token.decimals || 18));
                           
//                             return { ...token, balance: formattedBalance }; // Adjust decimals if necessary
//                         } else if  (token.type === 'coin') {
//                             if (balance > 0) {
//                                 return { ...token, balance: balance }; // Adjust decimals if necessary
//                             }
//                             return token;
//                         }
//                         else{
//                           const contract = new Contract(token.address, ERC20ABI, signer);
//                           const balance = await contract.balanceOf(address);
//                           let formattedBalance = 0;
                         
//                               formattedBalance = parseFloat(formatUnits(balance.toString(), token.decimals || 18));
                         
//                           return { ...token, balance: formattedBalance }; 
//                         }
//                     } catch (error) {
//                         // console.error(`Error fetching balance for token ${token.name}:`, error);
//                         return token; // Return the original token object in case of error
//                     }
//                 })
//             );
//             setTokenList(updatedTokenList);
//         } catch (error) {
//             console.error('Error fetching signer or updating token list:', error);
//         }
//     };

//     fetchBalances();
// }, [balance]);


 
//   const dispatch = useDispatch();
//   const inToken = useSelector((state) => state.tokens.inToken);
//   const outToken = useSelector((state) => state.tokens.outToken);

//   const handleTokenSelect = (token) => {
//     if (tokenType === 'inToken' && outToken && outToken.value === token.value) {
//       // Prevent selecting the same token as outToken
//       return;
//     }
//     if (tokenType === 'outToken' && inToken && inToken.value === token.value) {
//       // Prevent selecting the same token as inToken
//       return;
//     }
//     if (tokenType === 'inToken' && outToken && token.type === 'coin' && outToken.type === 'coin') {
//       // Prevent both tokens from being coins
//       dispatch(selectToken('outToken', inToken));
//     }
//     if (tokenType === 'outToken' && inToken && token.type === 'coin' && inToken.type === 'coin') {
//       // Prevent both tokens from being coins
//       dispatch(selectToken('inToken', outToken));
//     }
//     dispatch(selectToken(tokenType, token));
//     setShow(false); // Close modal after selection
//   };

//   return (
//     <Dialog modal open={show} onOpenChange={setShow}>
//       <DialogContent className="bg-black border-red-500">
//         <div className="relative pb-4 border-b border-b-gray-550">
//           <h3 className="text-lg font-bold">Select Token</h3>
//         </div>
//         <div className="relative my-5">
//           <div className="relative w-full h-9 bg-gray-850 border border-gray-550 outline-none flex items-center">
//             <span className="w-9 h-9 flex items-center justify-center">
//               <Search />
//             </span>
//             <input
//               type="text"
//               placeholder="Search by Name, Symbol, or address"
//               className="w-full h-full p-2 bg-transparent outline-none placeholder:text-gray-550"
//             />
//           </div>
//         </div>
//         <div className="relative w-full">
//           <ul className="relative w-full h-full max-h-72 overflow-y-auto">
//             {tokenList && tokenList.map((token, index) => (
//               <li
//                 key={index}
//                 className="cursor-pointer select-none"
//                 onClick={() => handleTokenSelect(token)}
//               >
//                 <div className="relative w-full py-2 px-3 flex items-center justify-between border border-transparent bg-transparent hover:border-gray-550 hover:bg-gray-850">
//                   <div className="flex items-center gap-2">
//                     <img
//                       src={token?.logo ? token?.logo : "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ethereum-eth-icon.png"}
//                       alt=""
//                       className="w-7 h-7 bg-white p-1 rounded-full"
//                     />
//                     <div className="relative">
//                       <h6 className="font-bold">{token?.name}</h6>
//                       <span className="block text-xxs text-gray-400">{token?.label}</span>
//                     </div>
//                   </div>
//                   <span className="block text-xs">{token?.balance ? Number(token?.balance) : '0.00'}</span>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default TokenModal;
