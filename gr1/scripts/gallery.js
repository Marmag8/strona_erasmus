(() => {
	const galleryGrid = document.getElementById("galleryGrid");

	if (!galleryGrid) {
		return;
	}

	const prevPageButton = document.getElementById("galleryPrev");
	const nextPageButton = document.getElementById("galleryNext");
	const pagesContainer = document.getElementById("galleryPages");

	const lightbox = document.getElementById("lightbox");
	const lightboxImage = document.getElementById("lightboxImage");
	const lightboxTitle = document.getElementById("lightboxTitle");
	const lightboxDescription = document.getElementById("lightboxDescription");
	const lightboxCloseButton = document.getElementById("lightboxClose");
	const lightboxPrevButton = document.getElementById("lightboxPrev");
	const lightboxNextButton = document.getElementById("lightboxNext");

	const galleryItems = [
		{
			src: "../public/gallery/idea.jpg",
			alt: "Przygotowania projektowe",
			title: "Przygotowania projektowe",
			description: "Uczestnicy podczas warsztatów i zajęć organizacyjnych.",
		},
	];

	const perPage = 12;
	const totalPages = Math.ceil(galleryItems.length / perPage);

	let currentPage = 1;
	let currentLightboxIndex = 0;

	const createGalleryCard = (item, index) => {
		const card = document.createElement("div");
		card.className =
			"group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm transition-all hover:shadow-[0_32px_48px_-4px_rgba(24,28,32,0.06)]";

		const button = document.createElement("button");
		button.type = "button";
		button.className = "block h-full w-full text-left";
		button.setAttribute("data-index", String(index));
		button.setAttribute("aria-label", `Otwórz zdjęcie: ${item.title}`);

		const img = document.createElement("img");
		img.src = item.src;
		img.alt = item.alt;
		img.className = "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105";

		button.appendChild(img);
		card.appendChild(button);

		return card;
	};

	const renderPageButtons = () => {
		if (!pagesContainer) {
			return;
		}

		pagesContainer.innerHTML = "";

		for (let page = 1; page <= totalPages; page += 1) {
			const pageButton = document.createElement("button");
			pageButton.type = "button";
			pageButton.textContent = String(page);
			pageButton.className =
				"px-5 py-2 rounded-full text-on-surface-variant font-medium transition-all hover:bg-white";
			pageButton.setAttribute("data-page", String(page));
			pageButton.setAttribute("aria-label", `Przejdź do strony ${page}`);

			if (page === currentPage) {
				pageButton.className = "px-5 py-2 rounded-full bg-primary text-on-primary font-bold shadow-md";
			}

			pagesContainer.appendChild(pageButton);
		}
	};

	const renderGallery = () => {
		const start = (currentPage - 1) * perPage;
		const end = start + perPage;

		galleryGrid.innerHTML = "";

		galleryItems.slice(start, end).forEach((item, localIndex) => {
			const globalIndex = start + localIndex;
			galleryGrid.appendChild(createGalleryCard(item, globalIndex));
		});

		renderPageButtons();

		if (prevPageButton) {
			prevPageButton.disabled = currentPage === 1;
		}

		if (nextPageButton) {
			nextPageButton.disabled = currentPage === totalPages;
		}
	};

	const updateLightboxContent = () => {
		const item = galleryItems[currentLightboxIndex];

		if (!item || !lightboxImage || !lightboxTitle || !lightboxDescription) {
			return;
		}

		lightboxImage.src = item.src;
		lightboxImage.alt = item.alt;
		lightboxTitle.textContent = item.title;
		lightboxDescription.textContent = item.description;
	};

	const openLightbox = (index) => {
		if (!lightbox) {
			return;
		}

		currentLightboxIndex = index;
		updateLightboxContent();
		lightbox.classList.remove("hidden");
		lightbox.setAttribute("aria-hidden", "false");
		document.body.classList.add("overflow-hidden");
	};

	const closeLightbox = () => {
		if (!lightbox) {
			return;
		}

		lightbox.classList.add("hidden");
		lightbox.setAttribute("aria-hidden", "true");
		document.body.classList.remove("overflow-hidden");
	};

	const showPrevImage = () => {
		currentLightboxIndex =
			(currentLightboxIndex - 1 + galleryItems.length) % galleryItems.length;
		updateLightboxContent();
	};

	const showNextImage = () => {
		currentLightboxIndex = (currentLightboxIndex + 1) % galleryItems.length;
		updateLightboxContent();
	};

	galleryGrid.addEventListener("click", (event) => {
		const target = event.target;

		if (!(target instanceof HTMLElement)) {
			return;
		}

		const trigger = target.closest("button[data-index]");

		if (!trigger) {
			return;
		}

		const index = Number(trigger.getAttribute("data-index"));

		if (!Number.isNaN(index)) {
			openLightbox(index);
		}
	});

	if (pagesContainer) {
		pagesContainer.addEventListener("click", (event) => {
			const target = event.target;

			if (!(target instanceof HTMLElement)) {
				return;
			}

			const pageButton = target.closest("button[data-page]");

			if (!pageButton) {
				return;
			}

			const nextPage = Number(pageButton.getAttribute("data-page"));

			if (!Number.isNaN(nextPage) && nextPage !== currentPage) {
				currentPage = nextPage;
				renderGallery();
			}
		});
	}

	prevPageButton?.addEventListener("click", () => {
		if (currentPage > 1) {
			currentPage -= 1;
			renderGallery();
		}
	});

	nextPageButton?.addEventListener("click", () => {
		if (currentPage < totalPages) {
			currentPage += 1;
			renderGallery();
		}
	});

	lightboxCloseButton?.addEventListener("click", closeLightbox);
	lightboxPrevButton?.addEventListener("click", showPrevImage);
	lightboxNextButton?.addEventListener("click", showNextImage);

	lightbox?.addEventListener("click", (event) => {
		if (event.target === lightbox) {
			closeLightbox();
		}
	});

	document.addEventListener("keydown", (event) => {
		if (!lightbox || lightbox.classList.contains("hidden")) {
			return;
		}

		if (event.key === "Escape") {
			closeLightbox();
		}

		if (event.key === "ArrowLeft") {
			showPrevImage();
		}

		if (event.key === "ArrowRight") {
			showNextImage();
		}
	});

	renderGallery();
})();
